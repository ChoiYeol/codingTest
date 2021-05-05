function solution(n, lost, reserve) {
 
    for (let i = 0; i < lost.length; i++) {
        let overL = reserve.indexOf(lost[i]);
        if (overL >=0) {
            lost.splice(i,1, -1);
            reserve.splice(overL,1, -1);
        }
    }
    for(let i=0; i< lost.length; i++) {
        for(let j=0; j< reserve.length; j++) {
            if(reserve[j]-1==lost[i] || reserve[j]+1==lost[i]){
                lost.splice(i,1, -1);
                reserve.splice(j,1, -1);
                break;
           
            }
        }      
    }
    return n -  lost.filter(arr => arr!= -1).length;
        
}