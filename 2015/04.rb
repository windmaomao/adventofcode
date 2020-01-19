require 'digest/md5'

secret = "bgvyzdsv"

i = 1
loop do 
  md = Digest::MD5.hexdigest("#{secret}#{i}")
  break if md[0, 5] == "00000"
  i += 1
end
p i


# 1006653 too high