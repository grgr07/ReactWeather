var React = require('react');
// var About = React.createClass({
//     render: function(){
//         return (
//             <h3>About component</h3>
//         );
//     }

// });

var About = (props) => {
    return (
            <div>
              <h1 className="text-center  page-title">About</h1>
              <p>This is a weather application based React. I built is as a part of study. </p>
              </div>
             );
}

module.exports = About;