import React, {useEffect, useRef} from 'react';
import {Bubbles, prepHTML} from "chat-bubble/component/Bubbles"
import styled from "styled-components"

import './App.css';
import 'chat-bubble/component/styles/input.css'
import 'chat-bubble/component/styles/reply.css'
import 'chat-bubble/component/styles/says.css'
import 'chat-bubble/component/styles/setup.css'
import 'chat-bubble/component/styles/typing.css'

// const inputBox = {
//   body {
//     background: #dcdde0;
//   }
//   .bubble-container {
//     height: 100vh;
//   }
// .bubble-container .input-wrap textarea {
//   margin: 0;
//   width: calc(100% - 30px);
// }width: calc(100% - 30px);

// const inputCallbackFn = function(o) {
//   // add error conversation block & recall it if no answer matched
//   var miss = function() {
//     chatWindow.talk(
//       {
//         "i-dont-get-it": {
//           says: [
//             "Sorry, I don't get it 😕. Pls repeat? Or you can just click below 👇"
//           ],
//           reply: o.convo[o.standingAnswer].reply
//         }
//       },
//       "i-dont-get-it"
//     )
//   }

//   // do this if answer found
//   var match = function(key) {
//     setTimeout(function() {
//       chatWindow.talk(convo, key) // restart current convo from point found in the answer
//     }, 600)
//   }

//   // sanitize text for search function
//   var strip = function(text) {
//     return text.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_'"`~()]/g, "")
//   }

//   // search function
//   var found = false
//   o.convo[o.standingAnswer].reply.forEach(function(e, i) {
//     strip(e.question).includes(strip(o.input)) && o.input.length > 0
//       ? (found = e.answer)
//       : found ? null : (found = false)
//   })
//   found ? match(found) : miss()
// }
function Chanbot() {

  const chat = useRef();

  useEffect(() => {
    prepHTML({relative_path: "../node_modules/chat-bubble/"})
    document.body.style.background = "#dcdde0"
    document.getElementsByClassName("bubble-container").height = "100vh";
    // eslint-disable-next-line react-hooks/exhaustive-deps
    window.chatWindow = new Bubbles(
      chat.current, // ...passing HTML container element...
      "chatWindow" // ...and name of the function as a parameter
    );
    window.chatWindow.typeInput()
    
    
    var convo = {
      ice: {
        says: ["Hi", "Would you like banana or ice cream?"],
        reply: [
          {
            question: "Banana",
            answer: "banana"
          },
          {
            question: "Ice Cream",
            answer: "ice-cream"
          }
        ]
      },
      banana: {
        says: ["🍌"],
        reply: [
          {
            question: "Start Over",
            answer: "ice"
          }
        ]
      },
      "ice-cream": {
        says: ["🍦"],
        reply: [
          {
            question: "Start Over",
            answer: "ice"
          }
        ]
      }
    }
    
    // pass JSON to your function and you're done!
    window.chatWindow.talk(convo)
    
    }, []
  )

  return (
    <div id="chat" ref={chat}>

    </div>
  );
}

export default Chanbot;