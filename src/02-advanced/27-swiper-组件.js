import React, {Component} from 'react';
import KSwiper from "./swiper/Swiper";
import KSwiperItem from "./swiper/SwiperItem";

// import KSwiperItem from "./swiper/SwiperItem";

class App extends Component {
    // state = {
    //     list:[]
    // }
    //
    // componentDidMount() {
    //     setTimeout(()=>this.setState({
    //         list:["aaaa","bbbb","cccc"]
    //     }))
    // }

    state = {
        list: []
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                list: ["aaaa", "bbbb", "cccc","dddd"]
            })
        }, 1000)
    }


    render() {
        return (
            <div>
                <KSwiper>
                    {/*<KSwiperItem>333</KSwiperItem>*/}
                    {/*<KSwiperItem>444</KSwiperItem>*/}
                    {/*<KSwiperItem>555</KSwiperItem>*/}

                    {
                        this.state.list.map(item=>
                        <KSwiperItem key={item}>{item}</KSwiperItem>

                        )
                    }

                </KSwiper>
            </div>
        );
    }
}

export default App;