import React, { PropTypes } from 'react'
import { getBlog } from './utils/helpers'
import marked from 'marked';
import hljs from 'highlight.js';

class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:'',
      wait:true
    }
  }
  componentDidMount(){
    getBlog(this.props.params.title)
      .then((data) => {
        this.setState({
          data:data.data,
          wait:false
        })

      })
  }
  render () {
    let content = this.state.wait ? '请稍等' : marked(this.state.data)
    marked.setOptions({
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });
    return(
      <div>
        <div dangerouslySetInnerHTML={{__html: content}} />
      </div>
    )
  }
}

export default Blog;
