exports.getHeartPath = () => {
  return [
    [199.999692558296, 139.037809861326],
    [
      199.999692558296, 139.037809861326, 216.517501342052, 91.0703552349714,
      260.408864739813, 101.478048251449,
    ],
    [
      304.306569058069, 111.887435228376, 302.040473463538, 149.898168782486,
      297.969050788655, 167.089794944798,
    ],
    [
      293.891253219557, 184.314831799952, 266.291989537884, 213.247676318414,
      241.405592420215, 229.538070494226,
    ],
    [
      216.517501342052, 245.828464670041, 201.360366325658, 263.475297677716,
      199.999692558296, 269.360116287618,
    ],
    [
      198.644947652665, 263.475297677716, 183.481883774538, 245.828464670041,
      158.595486656873, 229.538070494226,
    ],
    [
      133.70739557871, 213.247676318414, 106.111932139903, 184.314831799952,
      102.030334327938, 167.089794944798,
    ],
    [
      97.9589002789453, 149.898168782486, 95.6966160382817, 111.887435228376,
      139.592214337275, 101.478048251449,
    ],
    [
      183.481883774538, 91.0703552349714, 199.999692558296, 139.037809861326,
      199.999692558296, 139.037809861326,
    ],
  ];
};

exports.getCircle = () => {
  const X = 200;
  const Y = 200;

  const K = (4 * (Math.sqrt(2) - 1)) / 3;
  const R = 100;
  const RK = R * K;
  return [
    [R + X, 0 + Y],
    [R + X, RK + Y, RK + X, R + Y, 0 + X, R + Y],
    [-RK + X, R + Y, -R + X, RK + Y, -R + X, 0 + Y],
    [-R + X, -RK + Y, -RK + X, -R + Y, 0 + X, -R + Y],
    [RK + X, -R + Y, R + X, -RK + Y, R + X, 0 + Y],
  ];
};

exports.getTriangle = () => {
  return [
    [200, 100],
    [300, 273.205080756887],
    [100, 273.205080756887],
    [200, 100],
  ];
};
