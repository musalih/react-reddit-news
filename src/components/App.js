import React from 'react';
import {Form} from "./Form";
import Header from "./Header";
import Card from './Card';

class App extends React.Component {
    state = {
        news: [],
        error: false
    };

    getNews = async (event) => {
        event.preventDefault();
        const search = event.target.elements.search.value;
        const URL = `https://www.reddit.com/search.json?q=${search}`;
        const call = await fetch(URL);
        const data = await call.json();
        const news = data.data.children.map(data => data.data);
        console.log(news);

        this.setState({
            news,
            error: news.length === 0
        });
    };

    render() {
        //this.getNews();
        return (
            <div>
                <Header title="Reddit News"/>
                <Form getNews={this.getNews} error={this.state.error}/>
                <main className="news">
                    <div className="container">
                        <div className="row">
                                {this.state.news.map((key, index)=><Card
                                         subreddit={key.subreddit_name_prefixed}
                                         title={key.title}
                                         author={key.author}
                                         image={key.preview ? key.preview.images[0].source.url : '/src/img/default.png'}
                                         score={key.score}
                                         url={key.url}
                                        key={index}/>
                                )}
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default App;