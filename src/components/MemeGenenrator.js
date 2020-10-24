import React from 'react'
//Although it is just a function, you need to capitalize the first letter.
//it is "essnetial"
class MemeGenerator extends React.Component{
    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText:'',
            randomImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIzQ5_Cdc6mpengIlIlHR2rmrG-15mafvGwg&usqp=CAU',
            allImage: ''

        }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            console.log(memes[0])
            //memes[0]
            this.setState({allImage:memes})
        })
    }

    handleClick(e) {
        const {name, value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit(e) {
        e.preventDefault()
        var min = 0 ;
        var max = 99 ;
        const random_num = Math.floor( Math.random() * (max + 1 - min) ) + min 

        this.setState({randomImage:this.state.allImage[random_num].url})

    }

    render() {
        return (
            <div className='Meme'>

            <div className='Meme-img'>
                <img src={this.state.randomImage} className='Image'/>
                <p1>{this.state.topText}</p1>
                <p2>{this.state.bottomText}</p2>
            </div>

                <form className='Meme-form' onSubmit={this.handleSubmit}>

                <input className='inputText' type='text' name='topText' value={this.state.topText} 
                onChange={this.handleClick}placeholder='type topText'/>
                <br/>
                <br/>
                <input className='inputText' type='text' name='bottomText' value={this.state.bottomText}
                onChange={this.handleClick} placeholder='type bottomText'/>
                <br/>
                <br/>

                <button>Change</button>
                </form>

            </div>
        )
    }
}

export default MemeGenerator