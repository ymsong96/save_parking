import React,{Component} from 'react';
import  {Align, Marker} from "react-native-nmap";
import {View} from 'react-native'

let data = [];
export default class clusteringMarker extends Component{
    constructor(props){
        super(props);
        this.state={             
            level_latitude:0.0002,
            level_longitude:0.00013,
            zoomlevel:this.props.zoomlevel,
            filteredParkingData:this.props.filteredParkingData,
        }
    }
    
    ConfirmZoom(current){
        console.log(current.zoom+"new")
        let max_latitude = "";
        let min_latitude = "";
        let max_longitude = "";
        let min_longitude = "";
        let clustering_data = [];
        data = []
    
        if(current.zoom>=16){
         max_latitude = current.latitude+this.state.level_latitude*16
         min_latitude = current.latitude-this.state.level_latitude*16
         max_longitude = current.longitude+this.state.level_longitude*16
         min_longitude = current.longitude-this.state.level_longitude*16
         
         for(let i=0; i<this.state.filteredParkingData.length; i++){
           if(this.state.filteredParkingData[i].latitude<=max_latitude&&this.state.filteredParkingData[i].latitude>=min_latitude&&this.state.filteredParkingData[i].longitude<=max_longitude&&this.state.filteredParkingData[i].longitude>=min_longitude){
              clustering_data.push(this.state.filteredParkingData[i])
              
           }
           else{}
         }
         for(let i=0; i<clustering_data.length; i++){
              data[i]= (<Marker 
                            key= {i} 
                            onClick={()=>{this.props.setSelectedParking(clustering_data[i])}} 
                            coordinate={{ 
                              latitude: clustering_data[i].latitude, 
                              longitude: clustering_data[i].longitude}}
                            width={35} 
                            height={35}
                            pinColor="#002166"
                            image={require('./images/speech-bubble1.png')}
                            caption={{text: "₩600",textSize:13,color:"#ffffff",haloColor:'none',align:Align.Center}}
                          
                          >
                            {/* <ParkingMarker 
                                  basicCharge={parking.basicCharge}
                                  basicTime={parking.basicTime}
                                  parkingchrgeInfo={parking.parkingchrgeInfo}
                                  monthCmmtkt={parking.monthCmmtkt}
                            /> */}
                          </Marker>)
          }
        }
        
        else if(current.zoom>=15){
          
          max_latitude = current.latitude+this.state.level_latitude*32
          min_latitude = current.latitude-this.state.level_latitude*32
          max_longitude = current.longitude+this.state.level_longitude*32
          min_longitude = current.longitude-this.state.level_longitude*32
          
          for(let i=0; i<this.state.filteredParkingData.length; i++){
            if(this.state.filteredParkingData[i].latitude<=max_latitude&&this.state.filteredParkingData[i].latitude>=min_latitude&&this.state.filteredParkingData[i].longitude<=max_longitude&&this.state.filteredParkingData[i].longitude>=min_longitude){
               clustering_data.push(this.state.filteredParkingData[i])
               
            }
            else{}
          }
           this.Clustering(1600, clustering_data)
          
         }
         else if(current.zoom>=14){
          
          max_latitude = current.latitude+this.state.level_latitude*64
          min_latitude = current.latitude-this.state.level_latitude*64
          max_longitude = current.longitude+this.state.level_longitude*64
          min_longitude = current.longitude-this.state.level_longitude*64
          
          for(let i=0; i<this.state.filteredParkingData.length; i++){
            if(this.state.filteredParkingData[i].latitude<=max_latitude&&this.state.filteredParkingData[i].latitude>=min_latitude&&this.state.filteredParkingData[i].longitude<=max_longitude&&this.state.filteredParkingData[i].longitude>=min_longitude){
               clustering_data.push(this.state.filteredParkingData[i])
               
            }
            else{}
          }
          this.Clustering(1225, clustering_data)
          
         }
        else if(current.zoom>=13)
        {
          max_latitude = current.latitude+this.state.level_latitude*128
          min_latitude = current.latitude-this.state.level_latitude*128
          max_longitude = current.longitude+this.state.level_longitude*128
          min_longitude = current.longitude-this.state.level_longitude*128
          
          for(let i=0; i<this.state.filteredParkingData.length; i++){
            if(this.state.filteredParkingData[i].latitude<=max_latitude&&this.state.filteredParkingData[i].latitude>=min_latitude&&this.state.filteredParkingData[i].longitude<=max_longitude&&this.state.filteredParkingData[i].longitude>=min_longitude){
               clustering_data.push(this.state.filteredParkingData[i])
               
            }
            else{}
          }
          this.Clustering(900, clustering_data)
        }
        else if(current.zoom>=12){
          
          max_latitude = current.latitude+this.state.level_latitude*256
          min_latitude = current.latitude-this.state.level_latitude*256
          max_longitude = current.longitude+this.state.level_longitude*256
          min_longitude = current.longitude-this.state.level_longitude*256
          
          for(let i=0; i<this.state.filteredParkingData.length; i++){
            if(this.state.filteredParkingData[i].latitude<=max_latitude&&this.state.filteredParkingData[i].latitude>=min_latitude&&this.state.filteredParkingData[i].longitude<=max_longitude&&this.state.filteredParkingData[i].longitude>=min_longitude){
               clustering_data.push(this.state.filteredParkingData[i])
               
            }
            else{}
          }
          this.Clustering(400, clustering_data)
         }
         else if(current.zoom>=11){
          
          max_latitude = current.latitude+this.state.level_latitude*512
          min_latitude = current.latitude-this.state.level_latitude*512
          max_longitude = current.longitude+this.state.level_longitude*512
          min_longitude = current.longitude-this.state.level_longitude*512
          
          for(let i=0; i<this.state.filteredParkingData.length; i++){
            if(this.state.filteredParkingData[i].latitude<=max_latitude&&this.state.filteredParkingData[i].latitude>=min_latitude&&this.state.filteredParkingData[i].longitude<=max_longitude&&this.state.filteredParkingData[i].longitude>=min_longitude){
               clustering_data.push(this.state.filteredParkingData[i])
               
            }
            else{}
          }
          this.Clustering(100, clustering_data)
         }
        else if(current.zoom>=10){
          
         max_latitude = current.latitude+this.state.level_latitude*1024
         min_latitude = current.latitude-this.state.level_latitude*1024
         max_longitude = current.longitude+this.state.level_longitude*1024
         min_longitude = current.longitude-this.state.level_longitude*1024
    
         for(let i=0; i<this.state.filteredParkingData.length; i++){
           if(this.state.filteredParkingData[i].latitude<=max_latitude&&this.state.filteredParkingData[i].latitude>=min_latitude&&this.state.filteredParkingData[i].longitude<=max_longitude&&this.state.filteredParkingData[i].longitude>=min_longitude){
              clustering_data.push(this.state.filteredParkingData[i])
              
           }
           else{}
         }
         this.Clustering(25, clustering_data)
        }
        else if (current.zoom>=9){
          
         max_latitude = current.latitude+this.state.level_latitude*4096
         min_latitude = current.latitude-this.state.level_latitude*4096
         max_longitude = current.longitude+this.state.level_longitude*4096
         min_longitude = current.longitude-this.state.level_longitude*4096
         
         for(let i=0; i<this.state.filteredParkingData.length; i++){
           if(this.state.filteredParkingData[i].latitude<=max_latitude&&this.state.filteredParkingData[i].latitude>=min_latitude&&this.state.filteredParkingData[i].longitude<=max_longitude&&this.state.filteredParkingData[i].longitude>=min_longitude){
              clustering_data.push(this.state.filteredParkingData[i])
              
           }
           else{}
         }
         this.Clustering(9, clustering_data)
        }
        else{
          
         max_latitude = current.latitude+this.state.level_latitude*30000
         min_latitude = current.latitude-this.state.level_latitude*30000
         max_longitude = current.longitude+this.state.level_longitude*30000
         min_longitude = current.longitude-this.state.level_longitude*30000
         
    
         for(let i=0; i<this.state.filteredParkingData.length; i++){
           if(this.state.filteredParkingData[i].latitude<=max_latitude&&this.state.filteredParkingData[i].latitude>=min_latitude&&this.state.filteredParkingData[i].longitude<=max_longitude&&this.state.filteredParkingData[i].longitude>=min_longitude){
              clustering_data.push(this.state.filteredParkingData[i])
              
           }
           else{}
         }
         this.Clustering(1, clustering_data)
        }
      }  
    
      Clustering(k, clustering_data){ //마커를 몇개로 할 건지의 
        let centroid_lat = [];
        let centroid_lon = []; 
        let distance = [];
        let label = [];
        let lat_avg = [];
        let lon_avg = [];
        let num =[];
        let lab = 0;
        let min = 0;
        let lat = 0;
        let lon = 0;
        let plus = 0;
    
        if(k!=1){
          for(let i=0;i<Math.sqrt(k); i++){
            lat += 0.23/(Math.sqrt(k)-1)
            lon = 0
    
            for(let j=0; j<Math.sqrt(k); j++){
              centroid_lat[plus] = 35.03+lat //초기 중심점
              centroid_lon[plus] = 128.94+lon
              lon += 0.32/(Math.sqrt(k)-1)
              plus++
            }
          }
          
        }
        else{
          centroid_lat[k] = 35.03;
          centroid_lon[k] = 128.94;
        }
        for(let i=0; i<k; i++){ //초기화
            num[i] = 0
            lon_avg[i] = 0
            lat_avg[i] = 0
        }
        for(let p=0; p<4; p++){
          for(let i=0; i<clustering_data.length; i++){ //군집 나눠주는 구간
            for(let j=0; j<k; j++){
              distance[j] = Math.sqrt(Math.pow((centroid_lat[j]-Number(clustering_data[i].latitude)),2) + Math.pow((centroid_lon[j]-Number(clustering_data[i].longitude)),2))
            }
            
            min = Math.min.apply(null,distance) //중심점과 최소거리
            lab = distance.indexOf(min)
            label [i] = lab //군집선택
          }
    
          for(let i=0; i<k; i++){
            centroid_lat[i] = 0 //중심점 초기화
            centroid_lon[i] = 0
          }
    
          for(let i=0; i<clustering_data.length; i++){
            for(let j=0; j<k; j++){
              if(j==label[i] && centroid_lat[j] != 0 && centroid_lon[j] != 0){ //군집마다 평균 중심점 새로 설정
                centroid_lat[j] = (centroid_lat[j] + Number(clustering_data[i].latitude))/2
                centroid_lon[j] = (centroid_lon[j] + Number(clustering_data[i].longitude))/2
              }
              else if(j==label[i] && centroid_lat[j] == 0 && centroid_lon[j] == 0){ //중심점 없으면 그냥 넣어주기
                centroid_lat[j] = Number(clustering_data[i].latitude)
                centroid_lon[j] = Number(clustering_data[i].longitude)
              }
            }
          }
        }
    
        for(let i = 0; i<clustering_data.length; i++){
          for(let j = 0; j<k; j++){
            if(label[i]==j){
              num[j]++; //마커개수
              if(lat_avg[j] == 0 && lon_avg[j] == 0){
                lat_avg[j] = Number(clustering_data[i].latitude) 
                lon_avg[j] = Number(clustering_data[i].longitude)
              }
              else{
                lat_avg[j] = (lat_avg[j] + Number(clustering_data[i].latitude))/2 //마커위치 평균
                lon_avg[j] = (lon_avg[j] + Number(clustering_data[i].longitude))/2
              }
            }
            else{}
          }
        }
    
        for(let j=0; j<k; j++){
           if(num[j] == 1){ //기본 마커 출력
                data[j]= (<Marker 
                            key= {j} 
                            onClick={()=>{this.props.setSelectedParking({latitude:lat_avg[j], longitude:lon_avg[j]})}} 
                            coordinate={{ 
                              latitude: lat_avg[j], 
                              longitude: lon_avg[j]}}
                            width={35} 
                            height={35}
                            pinColor="#002166"
                            image={require('./images/speech-bubble1.png')}
                            caption={{text: "₩600",textSize:13,color:"#ffffff",haloColor:'none',align:Align.Center}}
                          
                          >
                            {/* <ParkingMarker 
                                  basicCharge={parking.basicCharge}
                                  basicTime={parking.basicTime}
                                  parkingchrgeInfo={parking.parkingchrgeInfo}
                                  monthCmmtkt={parking.monthCmmtkt}
                            /> */}
                          </Marker>)
              
           }
           else if(num[j] > 1){
                            //마커 합계 출력
                data[j]=(<Marker 
                          key={j}
                          coordinate={{latitude: lat_avg[j], longitude: lon_avg[j]}}
                          width={50}
                          height={50}
                          pinColor="#002166"
                          image={require('./images/circle.png')}
                          caption={{text: String(num[j]) ,textSize:14,color:"#000000",haloColor:'none',align:Align.Center}}
                          onClick={()=> {this.props.setCurrentMarker(lat_avg[j], lon_avg[j])}}
                          >
                          </Marker>
                        )
            }
           else{}
        }
        
      }

      render(){
          return(
            <View>
                 {this.ConfirmZoom(this.props.zoomlevel)}
                 {data.map((marker) =>(marker) )}
            </View>
          )
      }
}
