class GlobalMethods {
  toRadians(angleIn10thofaDegree) {
    // Angle in 10th
    // of a degree
    return (angleIn10thofaDegree * Math.PI) / 180;
  }
  distance(lat1, lat2, lon1, lon2) {
    // The math module contains
    // a function named toRadians
    // which converts from degrees
    // to radians.
    lon1 = this.toRadians(lon1);
    lon2 = this.toRadians(lon2);
    lat1 = this.toRadians(lat1);
    lat2 = this.toRadians(lat2);

    // Haversine formula
    var dlon = lon2 - lon1;
    var dlat = lat2 - lat1;
    var a =
      Math.Pow(Math.Sin(dlat / 2), 2) +
      Math.Cos(lat1) * Math.Cos(lat2) * Math.Pow(Math.Sin(dlon / 2), 2);

    var c = 2 * Math.Asin(Math.Sqrt(a));

    // Radius of earth in
    // kilometers. Use 3956
    // for miles
    var r = 6371;

    // calculate the result
    return c * r;
  }
}
export default GlobalMethods;
