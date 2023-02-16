import {oddEvenValue} from '..//sum';

describe('test for oddEvenValue function', () => {
  const oddNumber = 2;
  const evenNumber = 1;
    it('Should operate with invalid number', () => {
      const result = oddEvenValue('number')
      expect(result).toBe("Вы ввели не число!");
    }),
    it('Should operate with negative or less than 1 number', () => {
        expect(oddEvenValue(0)).toBe("Введенное число меньше 1!");
      }),
    it('Should operate with even number', () => {
        expect(oddEvenValue(2)).toBe(`Число ${oddNumber} - четное`);
      })
    it('Should operate with odd number', () => {
        expect(oddEvenValue(1)).toBe(`Число ${evenNumber} - нечетное`);
      })
    it('11.2 = error', () => {
        expect(oddEvenValue(11.2)).toBe("Введите целое число");
      })
});
