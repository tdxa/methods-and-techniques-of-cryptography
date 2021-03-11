import timeit

from assigment_02.utilities import allhash, drawplot, printall

text = "Diane, 11:30 a.m., February 24th. Entering the town of Twin Peaks, " \
       "five miles south of the Canadian border, twelve miles west of the state line. " \
       "I've never seen so many trees in my life. " \
       "As W.C. Fields would say, I'd rather be here than Philadelphia"

t = timeit.Timer(lambda: allhash(text))

printall(allhash(text))

print(f'\nHashing the text with all algorithms took {t.timeit(1)} seconds')

drawplot()