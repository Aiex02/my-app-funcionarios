export function inss(salary: number) {
  let inss = 0
  if (salary < 1300) {
    inss = salary * 6 / 100
  } else if (salary >= 1300 && salary < 1800) {
    inss = salary * 8 / 100
  } else if (salary >= 1800 && salary < 3000) {
    inss = salary * 10 / 100
  } else {
    inss = salary * 12 / 100
  }
  return inss
}

export function irf(salary: number) {
  let irf = 0

  if (salary > 1900) {
    irf = salary * 0.08
  }

  return irf
}

export function transportVoucher(salary: number) {
  //return salary * 6 / 100
  // ou
  let ntransporVoucher = salary * 6 / 100
  return ntransporVoucher
}


export function salaryReceived(salary: number) {
  return salary - inss(salary) - irf(salary)
    - transportVoucher(salary)
}
