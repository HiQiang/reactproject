import React, {Component} from 'react';
import Swiper, {Navigation, Pagination} from "swiper";

import 'swiper/css';

// init Swiper:
const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
});


class App extends Component {
    state = {
        list: ["111", "222", "333"]
    }

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
                        {
                            this.state.list.map(item =>
                                <div className={"swiper-slide"} key={item}>{item}</div>
                            )
                        }

                    </div>
                    <div className="swiper-pagination"></div>
                </div>

            </div>
        );
    }
}

export default App;

