import React from "react";
import {View,TouchableOpacity,Text,StyleSheet} from "react-native";
export default class RadioBtn extends React.Component{
    onPressBtn(){
        if(this.props.onPress){
            this.props.onPress();
        }
    }

    render(){
        return(
            <TouchableOpacity onPress={() => this.onPressBtn()}>
            <View style={styles.radioContainer}>
              
              {this.props.label ?(
    <Text style={styles.label}>{this.props.label}</Text>
              ):null
    }
    <View style={styles.circle}>
               {this.props.active ? (<View style={styles.activeCircle}/>):null}
              </View>
            </View>
          </TouchableOpacity>
        )
    }
}
const styles=StyleSheet.create({
    radioContainer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      },
      circle: {
        width: 30,
        height: 30,
        borderWidth: 2,
        borderColor: "blue",
        borderStyle: "solid",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
      },
      activeCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: "green"
      },
      label: {
        marginLeft: 10,
        color: "green"
      }
})