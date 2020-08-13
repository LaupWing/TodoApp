const days = 2;

const tokenAge = (daysFormat)=>{
    return daysFormat === 'days' ? `${days} days` : (24*days) * 60 * 60 *1000;
}
module.exports = tokenAge