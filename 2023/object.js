// {}.clone()
Object.prototype.clone = function () {
  return JSON.parse(JSON.stringify(this));
};

// {}.keys()
Object.prototype.keys = function () {
  return Object.keys(this);
};

// {}.values()
Object.prototype.values = function () {
  return Object.values(this);
};
