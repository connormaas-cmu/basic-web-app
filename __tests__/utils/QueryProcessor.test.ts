import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });
    

    test('should return andrew ID message', () =>  {
        const query = "andrewid";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "My andrew ID is cmaas."
        ));
    })

    test('should return name', () =>  {
        const query = "name";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Connor Maas"
        )); 
    })
    test('should return largest', () =>  {
        const query = "Which of the following numbers is the largest: 99, 48, 32?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "99"
        )); 
    })
    test('should return sum', () =>  {
        const query = "What is 60 plus 7?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "67"
        )); 
    })
    test('should return product', () =>  {
        const query = "What is 97 multiplied by 89?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "8633"
        )); 
    })
});