import { Component } from 'react';
import { votesService } from './votesService';
import VotesList from './cmps/votesList';
import './assets/style/main.scss'

export class VotesApp extends Component {

    state = {
        colors: [],
        max: 0
    }

    async componentDidMount() {
        const votes = await votesService.query()
        const colors = votes.colors
        this.setState({ colors }, this.getMaxVotes(colors));
    }

    getMaxVotes = (colors) => {
        var max = colors.reduce(function (curr, next) {
            return (curr.votes < next.votes) ? next : curr
        })
        this.setState({ max })
    }

    onColorClick = (color) => {
        const { colors } = this.state
        const idx = colors.findIndex(currColor => currColor.id === color.id)
        colors.splice(idx, 1, color)
        this.setState({ colors }, this.getMaxVotes(colors))
    }

    render() {
        const { colors } = this.state
        if (!colors) return (<h1>Loading...</h1>)
        return (
            <section>
                <div>
                    <h1>Color Votes</h1>
                    {colors && <VotesList colors={colors} maxVotes={this.state.max.votes} onColorClick={this.onColorClick} />}
                </div>
            </section>
        )
    }
}

