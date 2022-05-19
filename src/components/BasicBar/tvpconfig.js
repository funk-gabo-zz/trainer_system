const data = [
    {
      modalidad: 'Telemática',
      value: 50,
    },
    {
      modalidad: 'Presencial',
      value: 15,
    },
  ];

export const tvpconfig = {
    data,
    height: 300,
    width: 360,
    xField: 'value',
    yField: 'modalidad',
    seriesField: 'modalidad',
    legend: {
      position: 'top-left',
    },
  };