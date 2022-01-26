//map, filter, reduce, some, every
let arr = [1,2,3,4,5]

// Customize Map Function
Array.prototype.map = function(cb){
    let res=[]
    for (let i=0; i< this.length; i++){
        res.push(this[i]*2)
    }
    cb(res)
}

arr.map((arr)=> console.log('Customize Map Function:', arr))

// Customize Filter Function
Array.prototype.filter= function(cb){
    let res = []
   for (let i=0; i<this.length; i++){
       if (this[i]%2==0){
        res.push(this[i])
       }
   }
  cb(res)
}

arr.filter((arr)=> console.log('Customize Filter Function:', arr))


//Customize reduce function
Array.prototype.reduce= function(cb){
    let total = 0
    for (let i=0; i< this.length; i++){
        total+=this[i]*3
    }
    cb(total)
}

arr.reduce((arr)=>console.log('Customize Reduce Function:', arr))

//Customize some function
Array.prototype.some = function(cb){
    for(let i=0;i<this.length; i++){
        if(this[i]>3){
            cb(true)
        }
    }
}

arr.some((arr)=>console.log('Customize Some Function:', arr))

//Customize every function
Array.prototype.every=function(cb){
    let res= false
    let i=0
    while(i<this.length){
        if(this[i]<10){
            res = true
        }
        i++
    }
    cb(res)
}

arr.every((arr)=>console.log('Customize Every Function:', arr))