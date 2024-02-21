document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('converter-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        var weightInput = parseFloat(document.getElementById('weight-input').value);
        var conversionType = document.getElementById('conversion-type').value;

        var result;
        var resultUnit;
        if (conversionType === 'lbs-to-kg') {
            result = weightInput / 2.2046;
            resultUnit = 'kilograms';
        } else if (conversionType === 'kg-to-lbs') {
            result = weightInput * 2.2046;
            resultUnit = 'pounds';
        }

        result = result.toFixed(2); // Round up to two decimal places

        var resultContainer = document.getElementById('result-container');
        resultContainer.innerHTML = `
            <div class="result-box">
                <p class="input-label">Result:</p>
                <p class="input-field">${result} ${resultUnit}</p>
            </div>
        `;
    });
});