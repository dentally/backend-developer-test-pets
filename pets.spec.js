import { Pets } from './pets';

describe('Pet Score', () => {
  describe('testing for pet dog', () => {
    test('person has not pets', () => {
      const pets = new Pets(0);
      expect(pets.hasPet('dog')).toEqual(false);
    });

    xtest('person only has a dog', () => {
      const pets = new Pets(1);
      expect(pets.hasPet('dog')).toEqual(true);
    });

    xtest('person has a dog and something else', () => {
      const pets = new Pets(3);
      expect(pets.hasPet('dog')).toEqual(true);
    });

    xtest('person has a something, but not dog', () => {
      const pets = new Pets(2);
      expect(pets.hasPet('dog')).toEqual(false);
    });

    xtest('person has a everything', () => {
      const pets = new Pets(255);
      expect(pets.hasPet('dog')).toEqual(true);
    });
  });

  describe('testing for pet cat', () => {
    xtest('person has not pets', () => {
      const pets = new Pets(0);
      expect(pets.hasPet('cat')).toEqual(false);
    });

    xtest('person only has a cat', () => {
      const pets = new Pets(2);
      expect(pets.hasPet('cat')).toEqual(true);
    });

    xtest('person has a cat and something else', () => {
      const pets = new Pets(7);
      expect(pets.hasPet('cat')).toEqual(true);
    });

    xtest('person has a something, but not cat', () => {
      const pets = new Pets(5);
      expect(pets.hasPet('cat')).toEqual(false);
    });

    xtest('person has a everything', () => {
      const pets = new Pets(255);
      expect(pets.hasPet('cat')).toEqual(true);
    });
  });

  describe('testing for pet cow', () => {
    xtest('person has not pets', () => {
      const pets = new Pets(0);
      expect(pets.hasPet('cow')).toEqual(false);
    });

    xtest('person only has a cow', () => {
      const pets = new Pets(4);
      expect(pets.hasPet('cow')).toEqual(true);
    });

    xtest('person has a cow and something else', () => {
      const pets = new Pets(14);
      expect(pets.hasPet('cow')).toEqual(true);
    });

    xtest('person has a something, but not cow', () => {
      const pets = new Pets(10);
      expect(pets.hasPet('cow')).toEqual(false);
    });

    xtest('person has a everything', () => {
      const pets = new Pets(255);
      expect(pets.hasPet('cow')).toEqual(true);
    });
  });

  describe('testing for pet goat', () => {
    xtest('person has not pets', () => {
      const pets = new Pets(0);
      expect(pets.hasPet('goat')).toEqual(false);
    });

    xtest('person only has a goat', () => {
      const pets = new Pets(8);
      expect(pets.hasPet('goat')).toEqual(true);
    });

    xtest('person has a goat and something else', () => {
      const pets = new Pets(28);
      expect(pets.hasPet('goat')).toEqual(true);
    });

    xtest('person has a something, but not goat', () => {
      const pets = new Pets(20);
      expect(pets.hasPet('goat')).toEqual(false);
    });

    xtest('person has a everything', () => {
      const pets = new Pets(255);
      expect(pets.hasPet('goat')).toEqual(true);
    });
  });

  describe('testing for pet pig', () => {
    xtest('person has not pets', () => {
      const pets = new Pets(0);
      expect(pets.hasPet('pig')).toEqual(false);
    });

    xtest('person only has a pig', () => {
      const pets = new Pets(16);
      expect(pets.hasPet('pig')).toEqual(true);
    });

    xtest('person has a pig and something else', () => {
      const pets = new Pets(56);
      expect(pets.hasPet('pig')).toEqual(true);
    });

    xtest('person has a something, but not pig', () => {
      const pets = new Pets(40);
      expect(pets.hasPet('pig')).toEqual(false);
    });

    xtest('person has a everything', () => {
      const pets = new Pets(255);
      expect(pets.hasPet('pig')).toEqual(true);
    });
  });

  describe('testing for pet camel', () => {
    xtest('person has not pets', () => {
      const pets = new Pets(0);
      expect(pets.hasPet('camel')).toEqual(false);
    });

    xtest('person only has a camel', () => {
      const pets = new Pets(32);
      expect(pets.hasPet('camel')).toEqual(true);
    });

    xtest('person has a camel and something else', () => {
      const pets = new Pets(112);
      expect(pets.hasPet('camel')).toEqual(true);
    });

    xtest('person has a something, but not camel', () => {
      const pets = new Pets(80);
      expect(pets.hasPet('camel')).toEqual(false);
    });

    xtest('person has a everything', () => {
      const pets = new Pets(255);
      expect(pets.hasPet('camel')).toEqual(true);
    });
  });

  describe('testing for pet chicken', () => {
    xtest('person has not pets', () => {
      const pets = new Pets(0);
      expect(pets.hasPet('chicken')).toEqual(false);
    });

    xtest('person only has a chicken', () => {
      const pets = new Pets(64);
      expect(pets.hasPet('chicken')).toEqual(true);
    });

    xtest('person has a chicken and something else', () => {
      const pets = new Pets(224);
      expect(pets.hasPet('chicken')).toEqual(true);
    });

    xtest('person has a something, but not chicken', () => {
      const pets = new Pets(160);
      expect(pets.hasPet('chicken')).toEqual(false);
    });

    xtest('person has a everything', () => {
      const pets = new Pets(255);
      expect(pets.hasPet('chicken')).toEqual(true);
    });
  });

  describe('testing for pet horse', () => {
    xtest('person has not pets', () => {
      const pets = new Pets(0);
      expect(pets.hasPet('horse')).toEqual(false);
    });

    xtest('person only has a horse', () => {
      const pets = new Pets(128);
      expect(pets.hasPet('horse')).toEqual(true);
    });

    xtest('person has a horse and something else', () => {
      const pets = new Pets(192);
      expect(pets.hasPet('horse')).toEqual(true);
    });

    xtest('person has a something, but not horse', () => {
      const pets = new Pets(64);
      expect(pets.hasPet('horse')).toEqual(false);
    });

    xtest('person has a everything', () => {
      const pets = new Pets(255);
      expect(pets.hasPet('horse')).toEqual(true);
    });
  });

  describe('list when:', () => {
    xtest('no pets', () => {
      const pets = new Pets(0);
      expect(pets.list()).toEqual([]);
    });

    xtest('just dog', () => {
      const pets = new Pets(1);
      expect(pets.list()).toEqual(['dog']);
    });

    xtest('just cat', () => {
      const pets = new Pets(2);
      expect(pets.list()).toEqual(['cat']);
    });

    xtest('just goat', () => {
      const pets = new Pets(8);
      expect(pets.list()).toEqual(['goat']);
    });

    xtest('dog and cat', () => {
      const pets = new Pets(3);
      expect(pets.list()).toEqual(['dog', 'cat']);
    });

    xtest('more than dog but not cat', () => {
      const pets = new Pets(5);
      expect(pets.list()).toEqual(['dog', 'cow']);
    });

    xtest('lots of stuff', () => {
      const pets = new Pets(248);
      expect(pets.list()).toEqual([
        'goat',
        'pig',
        'camel',
        'chicken',
        'horse',
      ]);
    });

    xtest('everything', () => {
      const pets = new Pets(255);
      expect(pets.list()).toEqual([
        'dog',
        'cat',
        'cow',
        'goat',
        'pig',
        'camel',
        'chicken',
        'horse',
      ]);
    });

    xtest('no pet score parts', () => {
      const pets = new Pets(509);
      expect(pets.list()).toEqual([
        'dog',
        'cow',
        'goat',
        'pig',
        'camel',
        'chicken',
        'horse',
      ]);
    });
  });
});