import React, {Component} from 'react';
import Swiper, {Navigation, Pagination} from "swiper";
import 'swiper/css';

// init Swiper:
const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
});

class KSwiper extends Component {

    componentDidMount() {
        new Swiper(".swiper", {
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }

    render() {
        return (
            <div>
                <div className="swiper" style={{height: "200px", background: "yellow"}}>
                    <div className="swiper-wrapper">
                        {/*<div className={"swiper-slide"}>1111</div>*/}
                        {/*<div className={"swiper-slide"}>2222</div>*/}
                        {/*<div className={"swiper-slide"}>3333</div>*/}
                        {this.props.children}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>

            </div>
        );
    }
}

export default KSwiper;

