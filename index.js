const freelancers = [];
const averagePriceDisplay = document.getElementById('average-price');
const freelancerList = document.getElementById('list');

function addFreelancer(name, occupation, startingPrice) {
    freelancers.push({ name, occupation, startingPrice });
    updateFreelancerList();
    updateAveragePrice();
}

function updateFreelancerList() {
    freelancerList.innerHTML = '';
    freelancers.forEach(freelancer => {
        const listItem = document.createElement('li');
        listItem.textContent = `${freelancer.name} - ${freelancer.occupation} - Starting Price: $${freelancer.startingPrice}`;
        freelancerList.appendChild(listItem);
    });
}

function updateAveragePrice() {
    if (freelancers.length === 0) {
        averagePriceDisplay.textContent = '0';
        return;
    }
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
    const average = total / freelancers.length;
    averagePriceDisplay.textContent = average.toFixed();
}

addFreelancer('Dr. Slice', 'Gardener', 25);
addFreelancer('Dr. Pressure', 'Programmer', 51);

setInterval(() => {
    const names = ['Prof. Possibility', 'Prof. Prism', 'Dr. Impulse', 'Prof. Spark', 'Prof. Goose'];
    const occupations = ['Teacher', 'Teacher', 'Teacher', 'Programmer', 'Teacher', 'Driver'];
    const startingPrices = [43, 81, 43, 76, 47, 72];

    const index = Math.floor(Math.random() * names.length);
    addFreelancer(names[index], occupations[index], startingPrices[index]);
}, 5000);
