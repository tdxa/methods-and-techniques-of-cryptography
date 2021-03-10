import hashlib

# print(sorted(hashlib.algorithms_available))
import timeit

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


def allhash(text):
    for algorithm in hash_algorithms:
        algorithm.update(text.encode('utf-8'))
        if algorithm.name == 'shake_128' or algorithm.name == 'shake_256':
            print(f'{algorithm.name}: {algorithm.hexdigest(32)}')
            continue
        print(f'{algorithm.name}: {algorithm.hexdigest()}')



