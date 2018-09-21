export default function() {
  //TODO: Find a way of calling the Firebase NameList Here
  //TODO: And Move 'em into actions soon
  console.log('ReducerNames')
  return [
     "Adam Apple",
     "Billy Bunter",
     "Charlie Chaplin",
     "David Donut",
     "Eddy Eagle",
     "Freddie Flintoff",
     "George Graham",
     "Harry Hands",
     "Ian Italy",
     "Jane Josef",
     "Kevin Keegan",
     "Lucy Liu",
     "Marilyn Monroe",
     "Nancy Night",
     "Oliver Orange",
     "Peter Pettigrew",
     "Quentin Question",
     "Ronald Reagan",
     "Steven Seagal",
     "Tony Tiger",
     "Ursula Umbrella",
     "Vince Venus",
     "William Wallace",
     "Xteve Xmith",
     "Yvette Yesterday",
     "Zinedine Zidane",
  ];
}

// Take 2 arguments, State and Action.
// They're only ever called when an Action occurs.
// State Argument is not application state, only the state this reducer is
// responsible for.
// export default function(state=null, action) {
//   console.log('In Reducer Names');
//   console.log(action);
//   switch(action.type) {
//   case 'GET_NAMES':
//     return action.payload;
//   }
//   return state;
// }
