// 1-misol;
{
  let a = 4;
  let b = 2;
  let c = 9;
  let d = 3;
  let z = (a ** b + c ** 0.5) / d;
  console.log(z);
}

{
  let x = (Math.pow(4, 2) + Math.sqrt(9)) / 3;
  console.log(x);
}

// 2-misol;
{
  let x = 14.26;
  let y = -1.22;
  let z = 3.5 * 10 ** -2;
  let t =
    ((2 * Math.cos(x - Math.PI / 6)) / (0.5 + Math.sin(y) ** 2)) *
    (1 + z ** 2 / (3 - z ** 2 / 5));
  console.log(t);
}

// 3-misol;
{
  let x = -4.5;
  let y = 0.75 * 10 ** -4;
  let z = 0.845 * 10 ** 2;
  let u =
    Math.sqrt(8 +Math.pow( Math.abs(x - y),2) + 1) ** 3 / (x ** 2 + y ** 2 + 1) -
   ( Math.pow(Math.E , ( Math.abs(x - y)))) ((Math.tan(z) ** 2 + 1) ** x);
  console.log(u);
}
