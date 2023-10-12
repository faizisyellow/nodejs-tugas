module.exports.Success = (data, massage) => {
  const response = {
    code: 200,
    data: data,
    massage: massage,
  };
  return response;
};
module.exports.Fail = (data, massage) => {
  const response = {
    code: 400,
    data: data,
    massage: massage,
  };
  return response;
};
