import React, {Component} from 'react';


import 'swiper/css';
class KSwiperItem extends Component {
    render() {
        return (
            <div>
                <div className="swiper-slide">
                    {this.props.children}
                </div>
                
            </div>
        );
    }
}

export default KSwiperItem;