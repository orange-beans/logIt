
function zeroFill(num, width = 4)
{
  width -= num.toString().length;
  if (width > 0)
  {
    return new Array(width + (/\./.test(num) ? 2 : 1)).join('0') + num;
  }
  return num + ""; // always return a string
}

module.exports = zeroFill;
