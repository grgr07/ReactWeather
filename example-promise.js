//demo callback

function getTempCallback(locatin, callback){
	callback(undefined, 78);
	callback('City not found');
}

getTempCallback('Philadelphia',function(err, temp){
	if(err){
		console.log('error', err);
	}else{
		console.log('success', temp);
	}

});

//demo promise


function getTempPromise(location){
	return new Promise(function (resolve, reject) {
        setTimeout(function(){
            resolve(79);
            reject('City not found');
        },1000);
	});
}

getTempPromise('Philadelphia').then(function(temp){
	console.log('promise success', temp);
}, function(err) {
	console.log('promise error', err);
})


function addPromise(a,b){
    return new Promise(function (resolve, reject){
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a + b);
        }
        else{
            reject('Please provide numbers');
        }
    });
}
addPromise(3,3).then(function(temp){
    console.log('promise success', temp);
},function(err){
    console.log('promise error', err);
});

addPromise(3,'h').then(function(temp){
    console.log('promise success', temp);
},function(err){
    console.log('promise error', err);
});
