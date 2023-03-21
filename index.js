// Your code here
class Polygon {
    constructor(array){
        this.array=array
    }
    get countSides(){
        return this.array.length
    }
    get perimeter(){
        let perimeter=0
        for(let eachSide of this.array){
            perimeter+=eachSide
        }
        return perimeter
    }
}

class Triangle extends Polygon{
    get isValid(){
        const [a,b,c]=this.array;
        return a + b > c && a + c > b && b + c > a;
    }
}

class Square extends Polygon{
    get isValid(){
        const side=this.array[0]
        for(const element of this.array){
            if(element!==side){
                return false
            }
        }
        return true
    }
    get area(){
        if (this.isValid===true){
            return this.array[0]*this.array[0]
        }else{
            return ('This is not a valid square.')
        }
    }
}