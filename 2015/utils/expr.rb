def expr(eqn, vals)
  filled = eqn.map{|v| 
    case v 
    when 'AND'; '&'
    when 'OR'; '|'
    when 'LSHIFT'; '<<'
    when 'RSHIFT'; '>>'
    when 'NOT'; '~'
    else
      v.to_i.to_s == v ? v : vals[v]
    end
  }.join(' ')
  eval(filled) % 65536
end