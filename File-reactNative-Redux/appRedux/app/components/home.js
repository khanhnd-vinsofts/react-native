'use strict';

import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions';



class Home extends Component {


    componentDidMount() {
        this.props.getData(); // goi action
    }

    renderItem = ({item, index}) => {
        if(this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        }else{
            return(
                <View style={styles.row}>
                    <Text style={styles.title}>
                        {(parseInt(index) + 1)}{". "}{item.title}
                    </Text>
                    <Text style={styles.description}>
                        {item.description}
                    </Text>
                </View>
            );
        }

    }
  render() {

    return (
      <View style={{flex: 1, backgroundColor: '#F5F5F5', paddingTop: 20}}>
            <FlatList 
                ref='listRef'
                data={this.props.data}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index}
            />
      </View>
    );
  }
}



// Hàm này lấy dữ liệu từ trạng thái hiện tại của ứng dụng,
// và insert/links chúng vào props của component
//  hàm này làm cho Redux biết rằng component này cần phải chuyển một phần của state.
function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data
    }
}


// kết hợp các actions vào component's props
// đóng gói chúng trong dispatch() để chúng ngay lập tức gửi 1 actions
// chỉ bằng cách này ta có quyền truy cập vào các actions được định nghĩa trong file : (action/home.js))
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
    activityIndicatorContainer : {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    row: {
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10,
    },
    title: {
        fontSize: 15,
        fontWeight: '600',
    },
    description: {
        marginTop: 5,
        fontSize: 14,
    }
})