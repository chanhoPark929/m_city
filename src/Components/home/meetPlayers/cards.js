import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import KDB from '../../../Resources/images/players/player_to_upload/MIDF/kevin_de_bruyne.png';
import PlayerCard from '../../ui/playerCard';

class HomeCards extends Component {

    state = {
        show: this.props.show,
        cards: [
            {
                bottom: 90,
                left: 300
            },
            {
                bottom: 60,
                left: 200
            },
            {
                bottom: 30,
                left: 100
            },
            {
                bottom: 0,
                left: 0
            }
        ]
    }

    showAnimateCards = () => (
        this.state.cards.map((card, i) => {
            return (
                <Animate 
                    key={i}
                    show={this.props.show}
                    start={{
                        left: 0,
                        bottom: 0
                    }}
                    enter={{
                        left: [card.left],
                        bottom: [card.bottom],
                        timing: {duration: 500, ease: easePolyOut}
                    }}
                >
                    {({ left, bottom }) => {
                        return(
                            <div
                                style={{
                                    position: 'absolute',
                                    left,
                                    bottom
                                }}
                            >
                                <PlayerCard 
                                    number="17"
                                    name="Kevin"
                                    lastname="De Bruyne"
                                    bck={KDB}
                                />
                            </div>
                        )
                    }}
                </Animate>
            )
        })
    )

    render() {
        return (
            <div>
                {this.showAnimateCards()}
            </div>
        );
    }
}

export default HomeCards;