import hashlib
import matplotlib.pyplot as plt
import numpy as np
import random
import string
import timeit

"""Get all hashing algorithms from the hashlib library"""
blake2b = hashlib.blake2b()
blake2s = hashlib.blake2s()
md5 = hashlib.md5()
sha1 = hashlib.sha1()
sha224 = hashlib.sha224()
sha256 = hashlib.sha256()
sha384 = hashlib.sha384()
sha3224 = hashlib.sha3_224()
sha3256 = hashlib.sha3_256()
sha3384 = hashlib.sha3_384()
sha3512 = hashlib.sha3_512()
sha512 = hashlib.sha512()
shake128 = hashlib.shake_128()
shake256 = hashlib.shake_256()

hash_algorithms = [blake2b, blake2s, md5, sha1, sha224, sha256, sha384, sha3224, sha3256, sha3384, sha3512, sha512,
                   shake128, shake256]

"""allhash(text)

    Hashes the given text with all hash algorithms from the hashlib library.
    The shake 128 and shake256 algorithms have the input value set to 32.

    Parameters
    ----------
        text: string
            The string to hashed

    Returns
    ----------
        result: list
            a list of generated hashes
"""


def allhash(text):
    result = []
    for algorithm in hash_algorithms:
        algorithm.update(text.encode('utf-8'))
        if algorithm.name == 'shake_128' or algorithm.name == 'shake_256':
            result.append(algorithm.hexdigest(32))
            continue
        result.append(algorithm.hexdigest())

    return result


"""allhash(hashes)

    Prints the generated hashes from the list in the scheme - 'the name of the algorithm: hash'

    Parameters
    ----------
        hashes: list
            List of generated hashes to print
"""


def printall(hashes):
    for hash in range(len(hashes)):
        print(f'{hash_algorithms[hash].name}: {hashes[hash]}')


"""filehash(path)

    Hashes the given text with all hash algorithms from the hashlib library.
    The shake 128 and shake256 algorithms have the input value set to 32.

    Parameters
    ----------
        path: string
            Path to the file to be hashed

    Returns
    ----------
        str
            String containing the hash of the file
"""


def filehash(path):
    hash = hashlib.sha256()

    with open(path, 'rb') as file:
        while True:
            chunk = file.read(hash.block_size)
            if not chunk:
                break
            hash.update(chunk)

    return hash.hexdigest()


"""generatemessages()

    Generates 16 random strings of letters and numbers. 
    The length of the strings is chosen randomly from the range that is changed every iteration.

    Returns
    ----------
        messages: list
            List of 16 strings generated
"""


def generatemessages():
    messages = []
    for i in range(16):
        text = ''.join(random.choices(string.ascii_letters + string.digits, k=10 + (i * 100)))
        messages.append(text)

    return messages


"""drawplot()

    Generates a hash time plot with all algorithms from the hashlib library 
    for a list of strings of different lengths
    
    Inside, the generatemessages () function is called to create  list with random strings
"""


def drawplot():
    messages = generatemessages()
    results = []

    for message in messages:
        results.append(timeit.Timer(lambda: allhash(message)).timeit(1))

    plt.plot(np.arange(10, 1511, 100),results)
    plt.title('Time hashing with all algorithms from hashlib')
    plt.ylabel('Hashing time')
    plt.xlabel('String length')
    plt.show()