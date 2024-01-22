import { sum } from "../sum";


test("Sum of two parameters are ", () =>{
    
       const result = sum(3,4);
       
       //Assertion
       expect(result).toBe(7);
}); 