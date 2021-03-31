import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class ItemRequestScreen extends Component{
    constructor(){
        super();
        this.state={
            userId: firebase.auth().currentUser.email,
            Item:"",
            reasonToRequest:""
        }
    }

    createId(){
        return
            Math.random().toString(36).substring(7);
        
    }

    addRequest=(item,reasonToRequest)=>{
        var userId = this.state.userId
        var randomRequestId = this.createId()
        db.collection('requestedItem').add({
            "user_id":userId,
            "book_name":book_name,
            "reason_to_request":reasonToRequest,
            "requestId":randomRequestId,
        })

        this.setState({
            item:'',
            reasonToRequest:''
        })

        return alert("Item requested succesfully")
    }

    render(){
        return(
            <View style={{flex:1}}>
                <MyHeader title="Request Item"/>
                <KeyboardAvoidingView>
                    <TextInput
                    placeholder={"enter item name"}
                    onChangeText={(text)=>{
                        this.setState({
                            item:text
                        })
                    }}
                    />
                    <TextInput
                    multiline
                    numberOfLines={8}
                    placeholder={"What do you need the item for?"}
                    onChangeText={(text)=>{
                        this.setState({
                            reasonToRequest:text
                        })
                    }}
                    value={this.state.reasonToRequest}
                    />
                    <TouchableOpacity
                    onPress={()=>{
                        {this.addRequest(this.state.item,this.state.reasonToRequest)}
                    }}
                    >
                        <Text>Request</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}