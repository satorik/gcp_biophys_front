import React from 'react'

const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
]
const currentYear = new Date().getFullYear()

const YEARS = [currentYear - 1, currentYear, currentYear + 1]

const InputDate = ({
  onChanged,
  onBlur,
  label,
  value,
  withTime,
  children,
  required,
  withDate,
  idx,
}) => {
  const divDate = (
    <>
      <input
        type="text"
        className="form-control "
        value={value.day}
        title="day"
        placeholder={`День${required ? '*' : ''}`}
        onChange={onChanged}
        onBlur={() => onBlur(idx, 'day')}
      />
      <select
        className="form-control "
        value={value.month}
        title="month"
        onChange={onChanged}
      >
        {MONTHS.map((month, idx) => (
          <option key={idx} value={idx}>
            {month}
          </option>
        ))}
      </select>
      <select
        className="form-control  mr-2"
        title="year"
        value={value.year}
        onChange={onChanged}
      >
        {YEARS.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </>
  )
  const divTime = (
    <>
      <input
        type="text"
        className="form-control mr-1"
        value={value.hours}
        title="hours"
        placeholder={`Часы${required ? '*' : ''}`}
        onChange={onChanged}
        onBlur={() => onBlur(idx, 'hours')}
      />
      <span className="px-1">:</span>
      <input
        type="text"
        className="form-control mx-1"
        value={value.minutes}
        title="minutes"
        placeholder={`Минуты${required ? '*' : ''}`}
        onChange={onChanged}
        onBlur={() => onBlur(idx, 'minutes')}
      />
    </>
  )

  return (
    <div className="d-flex">
      <div className="input-group form-group align-items-center ">
        <div className="input-group-prepend">
          <span className="input-group-text">{label}</span>
        </div>
        {withDate && divDate}

        {withTime && divTime}

        {children}
      </div>
    </div>
  )
}

export default InputDate
