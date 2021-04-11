import React from 'react';
import { connect } from 'react-redux';
import {count_increment, count_decrement} from '../actions/demoActions';
import Login from '../components/Login'

function HomePage(props) {
    return (
        <div>
            Docs Overview
            checking in material ui working
            <p>{props.count}</p>
            <button  onClick={()=> props.count_increment()}>
                ADD COUNT
            </button>
            <button  onClick={()=> props.count_decrement()}>
                DECREASE COUNT
            </button>
            <Login/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    count:state.countReducer.count,
})


export default connect(mapStateToProps,{ count_increment, count_decrement })(HomePage)
