// const data = ['COM)B','B)C','C)D','D)E','E)F','B)G','G)H','D)I','E)J','J)K','K)L']

const data = ['HL2)HP5', 'PD5)SVL', 'GGS)YTS', '59G)C67', 'V3R)BTY', 'B9B)4QH', 'P42)PNP', '3MR)YPD', 'HPL)T7M', '9T9)BV2', 'QTG)LZM', 'LYL)2K1', 'ZM2)CCK', '983)QLL', 'WYK)SKS', 'G2H)5QT', 'GW2)39Q', 'K68)HBF', 'FLF)GYC', 'Y8H)B69', 'H61)TSN', 'J6L)PZH', 'BD3)WSD', '321)HZ7', 'FC4)X58', '7M7)SR7', 'KXX)S7P', 'JBT)HFR', 'DPQ)96V', '47S)36P', 'JQ8)FJL', '1PX)J2L', 'DR8)HJ5', '1P6)GS4', 'LXJ)WDK', '8BB)LYL', 'TPD)9XH', '5ZB)TML', 'ZYQ)DLC', '1D2)L82', 'SZX)TLH', '3HG)2Z4', 'T16)DT9', 'TDS)8PD', 'Y9F)VNZ', '7NW)LQD', 'F5W)88Z', 'YQH)N7L', 'TRH)V7C', 'FHB)WDL', 'DT3)BHQ', '4Q8)MXM', 'J1X)5DP', '172)6NG', 'SR7)FLL', 'DT9)PZP', 'M8V)FY6', 'RXG)Y4B', 'H5F)9G9', 'B53)F72', '9JQ)2WM', '422)BQD', '96B)6XD', 'F89)LCS', 'F59)9H9', 'J73)JQ9', 'PNV)BC3', 'B84)N4Y', '9FC)7L8', '2ZK)79Z', '7CM)6R3', '2LL)N46', 'DXF)2RH', 'C6Q)JVW', '96V)4FT', 'G86)3CT', 'Y4D)33X', 'MXM)BCN', 'KRR)S7L', 'BKX)8FF', 'RQ7)RLG', '6Q5)93D', 'YCZ)J41', 'ZSM)QGQ', 'R72)2QY', '848)SZX', '93D)Z9Q', 'X5S)T2M', '1H4)6Q5', '3F1)M8L', 'Y4W)FLF', 'K7D)1DD', 'CGL)8VF', 'N46)LCX', 'WDL)XHZ', 'YZ4)SC1', '6K8)D4Z', 'Z2B)F5J', 'SQF)1BV', 'NK2)BXT', 'SF7)H5Y', 'HBF)2GM', '7RN)5N6', '9XH)YGR', 'P7L)HWR', 'CRR)5JF', 'GGG)L41', '3JH)HVX', 'BCH)LNN', '4BG)XGX', 'JCZ)Q5T', 'SYH)H2H', 'CLB)TTD', '1QW)MX8', 'F58)9C6', 'DZY)B84', 'D76)LX2', 'JDC)RKC', '55J)B9B', 'DQY)1RB', '41Q)VN9', 'TQW)CY7', 'G1F)SYH', '9MQ)G1F', 'H1W)3LQ', 'Y5C)QBJ', 'CCK)PYL', 'C6D)P9Y', '837)N5C', 'ZKQ)SPV', 'DT9)37T', 'FSQ)GQG', '3GY)6BC', 'TP6)JWB', 'X42)9Y6', 'Z9Q)3G2', 'FF9)CFX', 'WJ8)873', 'TPP)VK6', '5ZY)DT3', '1LM)63J', '21Z)SQF', 'RQT)VQT', 'CSP)H3T', '3PC)S6B', '337)D7H', 'HZ7)XRK', '36P)8VL', 'R2C)LTF', 'NXN)5DQ', 'S24)5PL', 'X8H)7D5', 'LW1)GYR', 'H14)9SQ', 'P15)76B', '31W)NX3', 'QTH)97M', '35S)7XM', 'DK7)VGQ', 'VNZ)BGT', 'T6V)1MB', 'JK4)H92', 'BV1)ZPR', '3YG)7WM', 'YNL)JQ8', 'H92)C6G', '5GH)R7B', '4SK)X7R', 'KYK)VTJ', 'DWX)13Z', '2QN)XC3', 'MPF)CFJ', '2DW)G9R', 'KGF)V15', 'BQD)W9L', 'CX6)LRG', 'TGZ)KC3', '1S6)YCZ', 'S7L)3JH', 'K83)C6Q', 'H1X)K9L', 'ZPV)QYC', 'Z7D)CMZ', 'PVY)SNN', 'RVP)5B4', '4SX)5J5', 'WK5)C4P', 'XZ3)8XF', 'T3J)337', 'X5D)DR8', 'S6B)9FC', '4Z9)1F3', 'HF3)VCN', 'C37)2H4', '71S)NYD', '1MB)7CH', 'TXD)LYX', 'SF3)P7L', 'X4Z)VX8', 'XRL)RTX', 'F7V)QMZ', 'VR9)MHV', 'F6P)4FB', 'SC1)N9V', 'QSH)SG5', 'GVP)5DL', 'C4G)T1T', 'VH1)RH4', 'MZW)4W5', 'R7B)MRX', 'P4F)PY4', '7YW)577', 'Y1Y)NGJ', '642)M1Z', 'BLQ)Y4H', '3DT)PRB', 'DPQ)K8G', 'JKL)N97', '7KZ)ZY4', 'CX6)8RN', 'WM5)W5L', 'QBM)NK2', '2Z4)X8H', 'T1T)5BV', '2GM)5WD', 'LZM)V3R', 'S61)RN6', '744)BD2', 'VQT)WBH', 'QVF)YGJ', 'P4B)XCQ', 'J41)3FX', 'NCP)BL5', '1NK)VPM', '9H9)47S', 'T92)5X8', 'W9W)439', 'ST9)HTJ', 'SMD)1NK', 'DGW)2QN', 'T7N)LDH', 'Y9B)3HG', 'BBW)3DP', 'QQS)1H3', 'YNM)P4F', 'J4X)KK5', 'XHS)FJP', 'L82)HVP', 'K9L)2RT', '1VG)35S', '7GK)RD6', '1QV)BL4', '5NM)Z91', 'FK8)DWX', 'JQ9)7TN', '5J5)X7L', '5X8)837', '1DD)VYM', 'PKR)1QV', 'V32)Y5C', 'QMZ)XSF', 'CPY)8KQ', 'Y23)DQH', 'P9Y)YBY', 'DQH)QQS', 'S98)VB3', 'DGF)MS9', 'MTR)T5J', 'PZP)6CK', 'G6T)3G9', 'JYX)ZSM', '9G9)J2Q', 'F2F)NF1', '8X9)JGY', '7N3)91G', 'CJX)PCK', '3BR)FP2', 'HTQ)JF1', 'XW6)XXN', 'Y47)LZQ', 'ZZZ)Y23', 'VYM)TXW', '9G6)27H', 'Q5T)YLK', 'BV2)C1N', 'GZ4)K83', 'QXJ)JYX', 'M8P)YSL', '741)VSZ', 'QXP)BFG', 'X2H)TJ1', 'H2H)G1T', 'L41)NH6', 'QBJ)8BB', 'XN5)LTC', '26R)W2M', '2N6)YJD', '3LN)XHS', 'LRG)V65', '4W5)B8Y', 'HG6)QC9', 'Z3L)GFD', 'MLK)Y1Y', '13Z)LCC', '4QH)G2H', 'XSF)M8R', 'VH7)K7D', 'V8N)YBV', '751)7CM', 'NW1)P5H', '7FK)SHV', 'R6J)V32', 'TK7)H61', '2WM)26R', '8RN)5VS', 'BSF)5ZB', 'WW5)QXV', 'N42)2JB', 'FKG)V4R', 'Q5T)7GK', 'XBL)546', '1TC)Z4Y', '4F9)ZKZ', 'XRK)J4X', 'JZK)XN5', 'W23)GZB', 'V65)TQW', 'BF7)DXT', '726)3F1', 'L84)M8P', 'PDX)9QY', '7D4)QSN', '439)SCX', 'WBL)X42', '9NG)P36', 'R51)R17', 'Z9F)321', 'SSS)NSV', 'DQ4)P15', 'R2D)2J4', 'LDH)V8N', '96V)8J9', 'J9C)JDC', 'YBD)RQ3', '7FK)RSW', 'YJD)1X7', 'LYX)VSR', 'HWZ)1T5', 'W32)B53', 'CT7)FPL', 'YLH)HS7', 'C67)2F6', 'TGL)1D2', 'XH1)751', 'B95)TP6', '918)97J', 'LC7)52P', '4W5)Y9F', '5DP)XRP', 'JF1)KXX', '95P)8NP', 'SR8)HG8', '5ZB)D9Q', 'NRG)F2Z', 'FMT)J6S', '2RC)DGF', '4GZ)BXH', '4FB)LWM', '2YN)69M', 'PCK)9VS', '9W8)L84', 'SMH)JHR', 'B2X)WM5', '96B)BL2', 'F7V)R3L', 'DR3)JBY', 'ZF8)WRJ', '1RB)KTP', 'TWN)5QY', 'N7L)WLK', 'XM8)NRG', 'T84)6K8', 'FY6)XDY', '6GC)B9W', 'HFR)JRG', '6BC)SYX', 'MM1)53N', 'TDS)KPB', 'CSD)VJN', 'XDC)DK7', '6GV)KRR', '5JW)15B', 'VTJ)SMD', 'MMS)4Z9', '7WM)L7Q', '7XM)3PC', 'QGQ)2GB', 'WXR)G6T', 'MTP)65C', '5RP)C4G', 'PP3)Y2M', '9SV)27Y', '1ZD)2ZK', 'D2B)7TC', '5BV)9MQ', 'V15)844', 'CMZ)1VG', '6SH)BKX', 'C41)366', '3V4)DPQ', '8BB)MZW', 'HXL)X88', '2YN)JKL', 'YPD)9PN', 'SPV)YOU', '64L)S24', 'VGK)ZF1', 'ZJN)3WG', 'CSP)T7N', '7CH)MWB', '3DP)YNN', '37T)3V4', 'Z5N)J1Z', '578)FPJ', 'QYC)YNL', '52P)FXJ', '844)3GY', 'PWJ)S98', 'RB9)M14', 'T84)F89', 'C58)TCC', 'YVT)XW6', 'P49)STW', 'ZPR)TPD', 'Y4W)QFY', 'BNJ)VGT', '3FX)1TC', 'SP3)FNK', 'B4Y)PKR', 'WHY)TDS', 'VVL)Z5D', 'C99)GS9', '3WQ)MST', '33X)7D4', 'BLD)9JQ', 'MQN)QRP', 'M8R)ST9', '5DL)1P6', '5QY)D2V', 'X7R)LSR', 'BXT)MG4', '6TQ)LVD', 'XZQ)2KZ', 'PKW)V3X', 'QXP)95S', 'RRY)WLQ', 'KK5)VH7', 'PCG)1RS', 'SYX)SKW', 'GS9)ZPV', 'JBT)62J', 'N42)PJF', '5QT)JYF', 'QMQ)QRD', 'W1P)WJY', 'YD2)51R', 'XPL)4L3', 'RXS)ZF8', 'B8B)3ZN', 'JGY)R51', '9QY)WXJ', 'SHY)Y9B', 'HG8)TKR', 'L7Q)SZG', 'NYM)9T9', 'ZY4)6SF', '879)41Q', 'YBY)LBZ', 'RNN)J9C', 'LB6)XQG', '48W)XPL', 'W5K)TYT', 'JHR)94L', '2P8)QBM', 'ZW3)BF7', 'JBD)1GF', 'X4Z)9NG', 'HC7)PD5', '7JK)GNY', 'HQB)31W', 'M8L)JK4', 'LBZ)7NP', 'FC4)932', 'KGF)WW6', '6R3)Z2B', '1MM)3F3', 'WXR)8BP', 'SM6)JSD', '8WV)6C1', 'Z9M)S99', 'GZB)MTR', '39Q)1VY', 'VR9)PBP', 'B6D)MLC', 'DJW)YTY', 'X7L)R6J', 'YNN)G86', 'ZPV)NYM', '8KQ)5N5', 'K1Y)D8G', 'SVK)M3R', 'ZZD)XBJ', '5VS)M8V', '5N5)JZK', 'D2V)Y8H', 'SZG)FMS', 'CG2)2S3', '2H4)9P8', '9XY)SMV', '1YJ)3DT', '932)NDV', '3PK)PKW', '8PD)T4Z', '6C1)578', '6NK)2LL', 'NF1)H4Z', 'KC3)YQ2', '1F3)B9V', 'XLH)H1W', '1RS)YQH', 'R3L)92R', 'COM)K9X', 'TTD)BNJ', '4SV)5HZ', '549)J2W', 'S96)4JG', '88Z)TK7', '7D4)JPH', 'PYG)F76', 'TSC)W23', '9Y6)48W', 'S7P)QMQ', '15Y)NGF', '82B)NL3', '2RH)BW5', 'B8Y)MM1', 'L6M)JRV', '53V)S61', 'K8G)7YW', 'N5S)VQ8', 'W2H)WK7', 'GS7)3ZK', 'WSD)965', 'J2W)7FK', 'PNS)S6T', 'XHS)9LF', '1Z3)WJ4', '7F3)8X9', 'XRP)1KP', 'QGR)QNM', '5CB)N5N', 'T21)F2F', 'FP2)XZ9', '7L8)BCH', 'B9W)KCL', 'XNB)JFV', 'H4Z)2V1', 'C1N)DXF', 'LTF)918', 'KMJ)WSW', 'CYN)Y7D', 'KG3)XNB', 'SGC)TXD', 'KPB)Q9J', 'Y4B)KNW', 'MBC)XY7', 'XY1)717', 'VTH)RXS', 'VK6)S96', 'HP5)T6H', 'BMC)15Y', 'X6L)D2B', 'S99)P6L', '642)HWZ', 'Q9J)V3G', 'QM5)457', '72F)TWN', 'YTS)K9N', 'VQ8)QXP', 'XN5)WMB', 'Z6B)1Z3', 'JFV)HZB', 'NH6)4BY', '8VF)RQT', '1F3)BP7', '1LQ)WF3', 'RTX)SVK', 'RV4)572', '61D)64D', 'SQY)XHJ', 'TFB)KMX', 'GD7)RRY', 'TJ1)FC4', 'J5K)PYG', 'WLK)DGW', 'PYL)F58', 'PY4)X61', 'K5P)W32', 'SMD)GSG', 'SY2)XLH', '43L)XX5', '4DJ)NVS', 'GF5)T8J', 'R6J)T16', '6NG)W1R', 'LCS)6WZ', 'N9V)JBN', 'H9N)86Z', 'NS9)3MR', 'C2R)DLH', 'NM3)9H4', 'YSL)CQC', 'N8X)GZ4', 'XVG)Z9F', 'FPL)LXJ', 'PZH)ZJN', 'B9V)W2H', 'XDC)PNS', '873)V82', 'Q6L)S21', 'P4R)642', 'YQ2)QMR', 'C66)JJ2', 'CFJ)FFQ', 'NDV)MDT', 'D44)5ZY', 'HND)B8B', 'P67)PCG', 'QC9)C58', '6Z5)3PK', 'N5N)CPY', '6NG)N8P', '6ND)LC7', '2RT)GBM', 'GWW)WJB', '5DQ)3WS', '5WD)1MM', 'SQY)1LM', 'STW)2HX', 'R2T)1S1', '8BP)XMG', 'VPM)PVP', 'HWR)858', 'N8P)ZDH', '3G2)4KC', 'T8J)5HL', 'VLG)WBL', 'ZKZ)QM5', '4L3)5PN', 'G9R)WYK', 'SH1)K2B', 'JRG)9MN', 'WBH)B7R', '4FT)Y72', 'LCX)VL5', '1H4)1XQ', 'DLH)848', 'V3X)7F3', 'CT7)SF7', 'M6J)Q7R', '5B4)YLH', 'SNN)XZQ', '5GH)DV3', 'GS7)JCZ', 'D9Q)CJX', 'MX8)172', 'MG4)J73', 'RQ3)9G6', 'FJP)SC6', 'SKW)NDP', '1YN)T21', '1H3)GW2', 'YBD)6PV', '62J)MLK', 'BFG)GGS', 'GYR)P49', '6TQ)8Z3', 'JSD)87S', 'V82)53V', 'HTQ)YNM', 'CJM)FHB', 'JBD)SQY', 'XY7)MPF', 'RN6)Q4W', 'VN9)2MT', '3VM)61H', 'RN2)QGR', 'BV6)BLQ', '3WG)XPY', 'B69)TGL', '3VT)HG6', 'BL2)M1P', '1BV)2DW', '75P)3WQ', '9PN)CG2', 'DGF)J78', 'LQD)5GH', 'L2H)96B', 'XX5)82W', 'GYC)SGC', 'LYL)S9Z', 'HZB)D8R', 'K9N)6SH', '6R3)S3N', 'NGJ)VB5', 'QLL)SH1', '366)6Z5', 'QRP)9XY', 'NL3)21Z', '2G7)MJZ', 'P6L)RN2', 'DSH)GBJ', 'VGQ)95P', 'N97)94D', 'BD2)X47', 'T6H)VMN', 'G1R)B6D', 'B7R)R72', 'K9X)1PX', 'NJ8)2RC', 'S9Z)ZM2', 'HW5)FMT', 'FPJ)M5C', 'MST)1P9', '965)X32', 'NX3)CGK', '717)DR3', '1D2)TSC', 'RXH)H9N', '8G2)HPL', 'D8G)XXT', '5QT)4SX', '1XS)NHG', 'M9V)PF2', '4FB)744', '8NP)5JW', 'LZM)H14', 'J9C)484', '7TC)Z4B', 'Z27)1LQ', 'RKC)GVP', 'RQC)JBD', 'LVD)FKJ', 'GFD)HQB', '8J9)1ZD', '6SF)SAN', 'SC8)BK9', 'VGT)JX7', 'KCZ)4HT', 'K9L)MQN', '9MY)LZ5', 'JLP)WVP', 'HFV)Z7D', 'J1Z)LB6', 'X61)T92', 'WW6)VTH', 'KNC)NL4', 'C4P)RSJ', 'QNM)TFB', 'N12)983', '3JJ)QR5', 'LZ5)H84', 'KTP)7JK', '3WB)Q6L', 'MS9)YW7', 'DXT)Y4W', '3G9)LVC', '2K1)1YJ', '577)ZQT', '7NP)Y47', 'PVP)ZW3', 'V3H)SSS', 'ZVM)ZZZ', '1GF)ZYQ', 'HVX)R2D', 'J9G)4GZ', '3FX)CX6', '97J)X4Z', 'WMB)M2K', '9LF)B95', 'QBJ)HF3', 'JWB)292', 'QRD)P42', 'Q4W)RV4', 'XPY)M5Y', '5DQ)JGR', '95S)GYM', 'T7M)SY2', '6GV)PNV', 'P5H)7YV', '6XD)FVC', 'ZRP)LWH', 'BP7)W78', '6G4)741', 'G2B)HTQ', 'F2Z)D6P', 'XZ9)XVG', 'T7M)1H4', '1X7)55J', '94D)9ZH', 'HJ5)R2C', 'WSW)3VT', '2JB)CLB', '91G)GGG', 'S21)NJ8', '1Z3)5RP', '15B)WXR', 'Q63)PMD', '18C)C2R', '97M)DQ4', 'MRX)Y4D', '82W)BBW', 'QR5)2P8', 'CYN)H5F', 'WRJ)PWK', 'XCQ)3V1', 'BFM)8LX', '69M)HGF', 'LCC)9W8', '15Y)71S', 'WLF)CRR', 'MDT)549', '918)19W', 'J9B)82B', 'H6R)HL2', '2S3)1XS', '5JW)6ND', 'WF3)NCP', 'XGX)5CH', '6WZ)SHY', 'J67)P4B', 'VSR)J6N', '9ZH)35Y', 'MRJ)DSH', '86Z)X2H', 'TXW)WJ8', '3LQ)N8X', '9H4)3LN', 'KK5)4SK', 'NHG)K4C', 'GYM)43L', 'XQ4)KDX', 'Z5D)DZY', 'H4Z)JBT', 'BK9)KYK', '1KP)BV6', '44Y)T6V', 'T1T)TRH', '95Q)XZ3', '47X)375', 'PRB)MJX', 'VL5)FR1', 'CGK)7RN', '5CH)9BB', '5WN)NVY', 'SKS)YVT', 'DV3)SM6', '63J)ZRP', '7YV)GY7', 'PKW)T3J', 'JRV)XQ4', '2WM)XWK', 'F5J)GF5', '5PL)5WN', 'LWH)J67', 'WJY)N39', 'N12)3WB', 'FLL)RB9', 'T5J)J9B', 'FFQ)YD2', 'R2D)SC8', 'VX8)6G4', 'VMN)PP3', 'NDP)V3H', 'V8N)2XQ', '8VL)GD7', '1S1)4F9', 'GHT)8G2', 'T8V)4T3', 'DLC)MBC', '1RS)VH1', 'VN9)SMH', 'N39)RNN', 'W78)SCY', '3F3)Z17', '8LX)ZQY', '3VT)B11', '9BB)SP3', 'D8R)NW1', 'NGF)ZL8', 'NVS)G2B', 'ZQY)4FY', 'BHQ)C99', '2KZ)HFV', 'D6P)NM3', 'YTY)4DJ', '6PV)61D', 'TK7)1WL', '1VG)F7V', '5JF)75P', 'XWK)LZZ', 'V7C)NXN', 'RSJ)XY1', 'BCN)K5P', 'TCC)3YG', 'V4R)RHF', '1P9)NHK', 'JJ2)CW6', 'SCY)CYN', 'Z17)ZZD', 'VMQ)BV1', 'XMG)44Y', 'H84)726', 'R72)KMJ', '546)WK5', 'T4Z)QSH', 'CFX)WLF', 'JGR)TGZ', 'V7C)HXL', 'PBP)RB5', 'KMX)7M7', 'N65)MMS', 'XXN)9SV', 'VLN)422', 'RTX)8MY', 'J6S)TTH', 'YGJ)4SV', 'FN9)59G', 'NYD)H5N', 'YW7)8WV', 'GNY)7NW', 'TYT)YZ4', 'BL2)64L', 'HS7)P4R', 'XHJ)XDC', 'N5C)HND', 'CW6)W9W', '8FF)3YH', 'HD3)Z6B', '2J4)J9G', '7G7)KM7', 'S6T)BLD', 'WDK)Q63', 'PJF)PH3', 'ZGX)DJW', 'JBY)HCG', 'SMV)M9V', '3ZN)B2X', 'RB5)VMQ', 'XXT)YBD', '35Y)5BH', 'ZF1)LW1', 'LTC)D44', 'SHV)C41', 'WJB)HD3', 'MHV)VLG', 'W5L)FSQ', 'FVC)QTH', 'QR5)FLP', '8MY)C6D', 'KDX)J6L', 'ZQT)95Q', 'SH1)WHY', 'BL4)JLP', 'VB3)RQ7', 'GY7)ZGX', 'RH4)XNZ', 'D4Z)VFR', 'ZZZ)PDX', 'NM3)QTG', '6CK)XRL', '92R)XH1', 'LBZ)SR8', 'JNM)BTB', 'Q7R)FK8', 'M2K)JV2', '457)1S6', 'Q6L)B4Y', 'BC3)2G7', 'VJN)6NK', 'B9W)CGL', 'WVP)BSF', 'HVP)VGK', '9MN)879', 'YLK)QVF', 'J2Q)QXJ', 'MLC)47X', 'NHK)DQY', '9G9)18C', '2X2)Z9M', '375)QGC', '572)F59', 'YJD)RQC', 'X47)BFM', 'M14)N5S', 'S3N)6GC', '4T3)C66', '4DJ)X5D', 'P36)W5K', 'H5Y)SF3', 'WXJ)CT7', 'BL5)ZVM', 'JTW)6GV', 'M1Z)17T', '27Y)ZKQ', '1XQ)TTF', 'LZQ)DPY', 'Z9F)J1X', 'NL4)X6L', 'LCC)HMV', 'RD6)KCZ', 'M1P)H6R', 'TKR)3VM', '1WL)CSD', 'KCL)RVP', 'QGC)HC9', 'V3G)Z5N', 'NSV)9MY', 'VFR)G1R', 'M5Y)VR9', 'S9Z)KNC', 'YQH)N12', 'K4C)T84', '4JG)T8V', 'SG5)JNM', '79Z)V5L', 'PWK)MRJ', '95Q)J5K', 'FXJ)FN9', '7D5)KGF', 'K2B)VD1', 'QSN)4Q8', 'PD7)SLF', 'BKX)WW5', 'YGR)PWJ', 'LWM)XBL', 'XDY)3JJ', '9VS)D76', '3WS)4BG', 'B11)F6P', '94L)N42', 'VTH)PD7', '9H9)N65', 'YNL)2N6', 'JV2)CJM', 'M5C)7G7', 'RH4)W1P', '64D)BD3', 'FKJ)R2T', 'Z91)RXH', 'FJL)RXG', 'Y2M)DM4', '2F6)L6M', '27Q)KG3', '9SQ)M6J', 'KMJ)Z27', '3ZK)CDV', '3YH)1YN', 'SCX)NS9', 'C6G)27Q', 'GQG)5CB', 'C6L)5C1', 'MJZ)NP1', 'BGT)C37', 'NXN)P67', 'ZL8)FKG', '36P)JTW', 'LSR)X5S', '2XQ)H1X', 'X58)L2H', 'G1T)HC7', 'FLF)Z3L', 'XX5)7KZ', 'SLF)VVL', 'ZDH)TTQ', 'WK7)F5W', '8XF)K1Y', '87S)3BR', 'W2M)GHT', 'PF2)2YN', '17T)HW5', 'TSN)2X2', 'Z4Y)BWY', 'J2L)PVY', '76B)K68', 'H5F)XM8', 'TTQ)GWW', '61H)MTP', 'JYF)C6L', 'MBC)BMC', 'PMD)TPP', 'MJX)CSP', 'LZ5)1QW', 'XBJ)FF9', 'T2M)6TQ', '53N)GS7', '2QY)VLN', 'RLG)72F', 'HC9)5NM', 'YBV)7N3']

const nodeMap = data.reduce((acc, raw) => {
  const p = raw.split(')')
  const child = p[1], parent = p[0]
  if (!acc[parent]) acc[parent] = { cs: [], ps: [], l: 0 }
  if (!acc[child]) acc[child] = { cs: [], ps: [], l: 0 }
  acc[parent].cs.push(child)
  acc[child].ps.push(parent)

  return acc
}, {})

const nodeKeys = Object.keys(nodeMap)

const roots = nodeKeys.reduce((acc, k) => {
  const n = nodeMap[k]
  if (!n.ps.length) acc.push(k)
  return acc
}, [])

function tranv(pk) {
  const parent = nodeMap[pk]
  parent.cs.forEach(ck => {
    const child = nodeMap[ck]
    child.l = parent.l + 1
    tranv(ck)
  })
}

console.log(roots)

roots.forEach(rk => {
  tranv(rk)
})

console.log('Day 5-1:', nodeKeys.reduce(
  (acc, k) => {
    return acc + nodeMap[k].l
  }, 0
))

// COM, K9X, 1PX

function tranv2(pk, target, found, lvl) {
  // console.log(pk)
  if (found) return true
  if (pk === target) {
    console.log('Found', lvl)
    return true
  }

  const parent = nodeMap[pk]
  if (!parent.cs.length) return false

  for(let i=0; i<parent.cs.length; i++) {
    const ck = parent.cs[i]
    const f2 = tranv2(ck, target, false, lvl+1)
    if (f2) return true
  }
  return false
}

// '35S'
const root =  'T84' // 'K4C' // 'NHG' // '1XS' // '2S3' // 'CG2' // '9PN' // 'YPD' // '3MR' // 'NS9' // 'SCX' // '439' // 'W9W' // 'CW6' // 'JJ2' // 'C66' // '4T3' // 'T8V' // '4JG' // 'S96' // 'VK6' // 'TPP' // 'PMD' // 'Q63' // 'WDK' // 'LXJ' // 'FPL' 
// 'CT7' // 'WXJ' // '9QY' // 'PDX' // 'ZZZ' 
// 'ZVM' // 'BL5' // 'NCP' // 'WF3' // '1LQ' // 'Z27' // 'KMJ' // 'R72' 
// 'B7R' // 'WBH' // 'VQT' // 'RQT' // '8VF' // 'CGL' // 'B9W' 
// '6GC' // 'S3N' // '6R3' // '7CM' // '751' // 'XH1' 
// '92R' // 'R3L' // 'F7V' // '1VG' // 'CMZ'
// 'Z7D' // 'HFV' // '2KZ' // 'XZQ' // 'SNN' 
// 'PVY' // 'J2L' // '1PX' // 'K9X' // 'COM'

console.log('Day 6-2: YOU/SAN', 
  tranv2(root, 'YOU', false, 0),
  tranv2(root, 'SAN', false, 0)
)

console.log('Day 6-2:', 

)

// COM, K9X