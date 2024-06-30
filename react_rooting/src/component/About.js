import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>初めまして、{this.props.name}です。</p>
        <p>このサイトは日記を投稿できるサイトです。</p>
      </div>
    );
  }
}

export default About;