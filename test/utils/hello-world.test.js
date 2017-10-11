import test from 'ava';
import f from './../../src/js/utils/hello-world';

test('should return correct value', t => {
	const actual = f();
	t.is(actual, 'hello');
});
