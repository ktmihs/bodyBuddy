const year = new Date().getFullYear();

const careerStartYear = new Array(40).fill(0).map((arr, index) => year - index);

export default careerStartYear;
