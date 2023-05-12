/*c onst array1 = [
    {
        instanceID: 1,
        InstanceType: 'at',
        name: 'an'
    },
    {
        instanceID: 2,
        InstanceType: 'bt',
        name: 'bn'
    },
    {
        instanceID: 3,
        InstanceType: 'ct',
        name: 'cn'
    },
];
class x {
     id: number;
     type: string;
     name1: string;
}
console.log(array1);
const array2 = array1.map(each => {
    const r = new x();
    r.id = each.instanceID;
    r.type = each.name;
    r.name1 = each.InstanceType;
    return r;
});
console.log(array1);

const array3 = array1.map(each=>{
    each.instanceID = each.instanceID + 1
    return each;
});
console.log(array1);
console.log(array3); */

/* var arr =[2,3,4,5];
var sum = arr.reduce((prev,cur,index,arr)=>{
    console.log(prev,cur,index);
    return prev + cur;
},3)

console.log(arr,sum); */

let arr = [1, 2, 3, 4, 3, 4, 1]
let newArr = arr.reduce((pre, cur) => {
    if (!pre.includes(cur)) {
        console.log('true');
        console.log(pre.concat(cur));
        return pre.concat(cur)
    } else {
        console.log('false');
        console.log(pre);
        return pre
    }
}, [])  
console.log(newArr);// [1, 2, 3, 4]