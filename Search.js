import React, {Component} from 'react';
import { 
  StyleSheet, 
  SafeAreaView,
  View, 
  TouchableOpacity, 
  Text, 
  Dimensions,
  FlatList,
} from 'react-native';
import { Input } from 'react-native-elements';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
window = Dimensions.get('window');
const API_KEY = "";


export default class Search extends Component{
  constructor(props){
    super(props);
    this.state={
        searchedText:'',
        searchedPlace:{
          longitude:0,
          latitude:0,
        },
        suggestion:[{
          name:'',
          id:'',
          latitude:'',
          longitude:'',
          address_name:'',
        }],
        history:[{
          name:'',
          id:'0',
          latitude:'',
          longitude:'',
          address_name:'',
        }],
    }
    this.searchTextInputChanged = this.searchTextInputChanged.bind(this);
    this.HistoryOnpress = this.HistoryOnpress.bind(this);
    this._onSubmitEditing = this._onSubmitEditing.bind(this);
  }
  
  searchTextInputChanged(text) {
    this.setState({ searchedText: text })
  }
  _onSubmitEditing(){
        fetch(`https://dapi.kakao.com/v2/local/search/keyword.json?y=35.2538433&x=128.6402609&radius=20000&query=${this.state.searchedText}`, {
        headers: {
          Authorization: `KakaoAK ${API_KEY}` 
        }
      })
      .then(response => response.json())
      .then(json => {
        this.setState(
          {searchedPlace:{longitude:parseFloat(json.documents[0].x), 
                          latitude:parseFloat(json.documents[0].y)},
          history:[...this.state.history,
                  {name:json.documents[0].place_name, 
                  id:json.documents[0].id,
                  longitude:parseFloat(json.documents[0].x), 
                  latitude:parseFloat(json.documents[0].y),
                  address_name:json.documents[0].address_name}],
          searchedText:'',
        },()=>{
          this.props.setSearchedPlace(this.state.searchedPlace);
          this.props.closeSearch();
        }
        )});
  }
  HistoryOnpress(place){
    this.setState(
      {searchedPlace:{longitude:place.longitude, latitude:place.latitude},
      searchedText:'',
    },()=>{
      this.props.setSearchedPlace(this.state.searchedPlace);
      this.props.closeSearch();
    })
  }
  HistoryRemove= (id) => {
    const nextKeyword = this.state.history.filter((history) => {
      return history.id != id
    })
    this.setState({history:nextKeyword})
  }
  renderHeader = () => {
    return (
      <View style={styles.searchHeader}>
        <TouchableOpacity 
          onPress={this.props.closeSearch}
        >
          <FeatherIcon 
            style={styles.backIcon} 
            name="arrow-left" 
            size={24} 
            color="gray"
          />
        </TouchableOpacity>
          <Input
            value={this.state.searchedText}
            inputContainerStyle={{borderBottomWidth:0, marginTop:5}}
            onSubmitEditing={()=>this._onSubmitEditing()}
            containerStyle={styles.input}
            onChangeText={text => this.searchTextInputChanged(text)}
            autoCorrect={false}
            autoCapitalize = "none"
            placeholder="장소를 입력해주세요."
          />
          
          {this.state.searchedText != ''&&
            <TouchableOpacity 
              onPress={()=>{this.setState({searchedText:''})}}
            >
              <FeatherIcon 
                style={styles.xIcon} 
                name="x" 
                size={24} 
                color="gray"
              />
          </TouchableOpacity>  
        }          
      </View>
    );
  };

  render(){
    const History = ({ place }) => {
      if(this.state.history.length > 1){
        return (
          
          <View>
            {place.name !=''&&
            <View style={styles.list}>
                        <View style={styles.placelist}>
                        <TouchableOpacity onPress={()=>this.HistoryOnpress(place)}>
                            <Text style={styles.place_name}>
                                <IoniconsIcon 
                                  style={styles.historyClockIcon}
                                  name="time-outline" 
                                  size={24} 
                                  color="gray"
                                />
                                {place.name}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                          onPress={()=>this.HistoryRemove(place.id)}
                          style={styles.historyXIcon}
                        >
                          <FeatherIcon 
                            name="x" 
                            size={24} 
                            color="gray"
                          />
                        </TouchableOpacity>  
                    </View>
                    <Text style={styles.address_name}>
                      {place.address_name}  
                    </Text>      
                  </View>
            }  
          </View>
      )
    }
    else{
      return null
    }
  }
  const Suggestion = ({place_name}) => {
    if(this.state.suggestion.length > 1){
    return (
      <View style={styles.list}>
        <View style={styles.placelist}>
          <TouchableOpacity >
              <Text style={styles.place_name}>
                <IoniconsIcon 
                  name="location" 
                  size={24} 
                  color="gray"
                />
                {place_name}      
              </Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>{
              this.setState({searchedText:place_name})
          }}
          style={styles.recallIcon}>
            <FeatherIcon 
              name="arrow-up-left" 
              size={24} 
              color="gray"
            />
          </TouchableOpacity>
        </View>        
      </View>
    )
  }
  else{
    return null
  }
}
  const renderHistory = ({ item }) => (
    <History place={item} />
  );
  const renderSuggestion= ({ item }) => (
    <Suggestion place_name={item.name} />
  );
    return (
      <SafeAreaView style={styles.container}>
        {this.state.searchedText == ''
        ?
          <FlatList
            data={this.state.history}
            keyExtractor={item => item.id}
            renderItem={renderHistory}
            ListHeaderComponent={this.renderHeader}
          />
        : <FlatList
            data={this.state.suggestion}
            keyExtractor={item => item.id}
            renderItem={renderSuggestion}
            ListHeaderComponent={this.renderHeader}
          />
        }
      </SafeAreaView>
    )}
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    width:window.width,
    height:window.height,
    backgroundColor:'#fff',

  },
  searchHeader:{
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth:1,
    borderBottomColor:'gray',
    height:60
  },
  backIcon:{
    alignItems:'flex-start',
    paddingTop:15,
    paddingLeft:10
  },
  xIcon:{
    alignItems:'flex-end',
    paddingRight:10,
    paddingTop:15,
  },
  input:{
    width:window.width-75,
  },
  item: {
    paddingTop: 5,
  },
  place_name:{
    fontSize:24,
    paddingStart:15,
    paddingTop:15
  },
  recallIcon:{
    paddingRight:10,
  },
  placelist: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  historyClockIcon:{
    marginRight:10
  },
  historyXIcon:{
    paddingEnd:15,
    paddingTop:15
  },
  address_name:{
    color:"gray",
    fontSize:15,
    paddingLeft:15
  }
});