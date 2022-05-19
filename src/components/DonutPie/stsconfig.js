const data = [
    {
      type: 'Realizadas',
      value: 27,
    },
    {
      type: 'Pendientes',
      value: 25,
    },
    {
      type: 'Canceladas',
      value: 18,
    },
  ];

export const stsconfig = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    theme: {
        colors10: [
          '#6eef6a',
          '#8d93b7',
          '#df9c68',
          '#76523B',
          '#DAD5B5',
          '#0E8E89',
          '#E19348',
          '#F383A2',
          '#247FEA',
        ]
      },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontSize: 17,
        },
        content: 
        `Estado`,
      },
    },
  };