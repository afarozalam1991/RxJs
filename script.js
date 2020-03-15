// var button= document.querySelector('button');
// // button.addEventListener('click', ()=>console.log(event))
// var observers={
//     next: function(value){
//         console.log(value);
//     },
//     error: function(error){
//         console.log(error);
//     },
//     complete: function(){
//         console.log('completed');
//     }
// };
// Rx.Observable.fromEvent(button, 'click')
// .throttleTime(1000)
// .subscribe((value)=>console.log(value.clientX)
// );
// Rx.Observable.fromEvent(button, 'click')
// .subscribe(observers);
// var subscription= Rx.Observable.create((obs)=>{      //Creating an Observable
//     obs.next('First Value');
//     setTimeout(()=>{
//     obs.error('error');
//     obs.next('Second Value');
//     }, 1000)
// // obs.error('error');
// button.onclick=((event)=>{
// obs.next(event);
// })
// })
// .subscribe(observers);
// /*
// Todo: Unsubscribing for memory leak
// */
// setTimeout(()=>{
//     subscription.unsubscribe();
// }, 10000);

/*
RxJs Operators
*/
// var observable= Rx.Observable.interval(1000);
// var observers={
//     next: function(value){
//         console.log(value);
//     }
// }
// observable.map((value)=>{
//  return value*2;
// }).throttleTime(1900).subscribe(observers);

/* Filter Operator */
var observable= Rx.Observable.interval(1000);
var observer={
    next: function(value){
        console.log(value);
    },
    error: function(error){
        console.log(error);
    },
    complete: function(){
        console.log('Completed!');
    }
}
observable.
    map((value)=>{
        return value*2;
    }).filter((value)=>{
        return value%2===0;
    }).subscribe(observer);
// /* RxJs Subjects */

// var subject= new Rx.Subject();
// subject.subscribe({
//     next: function(value){
//         console.log(value);
//     },
//     error: function(error){
//         console.log(error);
//     },
//     complete: function(){
//         console.log('Completed!');
//     }
// });
// subject.subscribe({
//     next: function(value){
//         console.log(value);
//     }
// });
// subject.next('A Piece of code has been multicasted!');