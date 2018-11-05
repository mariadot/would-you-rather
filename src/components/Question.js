import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Question extends Component {
    render(){
        const { question, author, avatar } = this.props;

        return (
            <div>
                <div className='question ui three column stackable center aligned grid'>
                    <div className='column'>
                    <div className="ui cards">
                        <div className="card">
                            <div className="content">
                                <header className="header">
                                    <h2>{author} asks...</h2>
                                </header>
                            </div>
                            <div className="content">
                                <img className='ui image circular tiny left floated' alt='user avatar' src={avatar} />  
                                    <h3>Would you rather...?</h3>
                                    <p>...{ question.optionOne.text }...</p>
                            </div>
                            <div className="extra content">
                                <Link to={`/questions/${question.id}`} className='ui basic green button'>
                                    View poll
                                </Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}, {question}){
    const author = users[question.author] ? users[question.author].name : '';
    const avatar = users[question.author].avatarURL;

    return {
        users,
        author,
        question: question,
        avatar: avatar
    }
}

export default connect(mapStateToProps)(Question);
