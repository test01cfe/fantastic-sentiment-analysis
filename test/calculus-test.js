
const cfe_ai_copilot_sentanal = require('../calculus.js');
const assert = require('chai').assert;

describe('test cfe_ai_copilot_sentanal', function() {
    it('test cfe.ai.copilot.sentanal.solveEquation 1', function(done) {
        let equation = 'x^2 + 2x + 1 = 0';
        let result = cfe_ai_copilot_sentanal.solveEquation(equation);
        console.log(result);
        assert.equal(result[0], -1, 'x = -1');
        done();
    }),

    it('test cfe.ai.copilot.sentanal.solveEquation 2', function(done) {
        let result = cfe_ai_copilot_sentanal.solveEquation('x^2 + 2x - 3 = 0');
        assert.equal(result[0].toString(), 1, 'x = 1');
        assert.equal(result[1].toString(), -3, 'x = -3');
        done();
    })
})

