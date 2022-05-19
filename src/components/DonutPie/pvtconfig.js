export const data = [
    {
      type: 'Dispatcher',
      value: 27,
    },
    {
      type: 'Control',
      value: 25,
    },
    {
      type: 'Telemetría',
      value: 18,
    },
    {
      type: 'M/R',
      value: 15,
    },
  ];

export const pvtconfig = {
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
          '#FF0000',
          '#626681',
          '#FFC100',
          '#9FB40F',
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
        },
        content: 
        `Capacitación/
        Plataforma`,
      },
    },
  };